import os
import pandas as pd
import json

# Sample file paths (replace with actual paths)
excel_file_path = r"C:\real-estate\web_th_city\import_data\apartment_template.xlsx"
images_folder = r"C:\real-estate\web_th_city\the-city\public\images"

# Load Excel data
df = pd.read_excel(excel_file_path)

# Helper to convert amenities from comma-separated string to list
def parse_amenities(value):
    if pd.isna(value):
        return []
    return [item.strip() for item in str(value).split(',')]

# Helper to find images for an apartment ID
def find_apartment_images(apt_id):
    images = []
    # Check all subdirectories in images folder
    for root, dirs, files in os.walk(images_folder):
        # Only process directories that contain the apartment ID
        if str(apt_id) in os.path.basename(root):
            for img_file in sorted(files):
                if img_file.lower().endswith('.webp'):
                    # Get relative path from images_folder
                    rel_path = os.path.relpath(os.path.join(root, img_file), images_folder)
                    # Convert Windows path to URL format with forward slashes
                    url_path = '/images/' + rel_path.replace('\\', '/')
                    images.append({
                        "alt": f"Apartment {apt_id} - {os.path.splitext(img_file)[0]}",
                        "url": url_path
                    })
    return images

# Get column names from Excel
column_names = df.columns.tolist()

# Generate apartment entries
apartments = []
for index, row in df.iterrows():
    apt_id = str(row.get("id", f"APT{index+1:03d}"))
    
    # Create apartment dictionary dynamically based on Excel columns
    apartment = {}
    for column in column_names:
        value = row.get(column, "")
        
        # Handle special cases
        if column.lower() == "amenities":
            apartment[column] = parse_amenities(value)
        elif column.lower() == "agent":
            # Assuming agent data is stored as JSON string in Excel
            try:
                apartment[column] = json.loads(value) if value else {"name": "Unknown Agent", "phone": ""}
            except:
                apartment[column] = {"name": "Unknown Agent", "phone": ""}
        elif column.lower() in ["price", "bedrooms", "bathrooms", "area", "rating"]:
            # Convert numeric values
            apartment[column] = float(value) if pd.notna(value) else 0
        elif column.lower() == "is_premium":
            # Convert boolean values
            apartment[column] = bool(value) if pd.notna(value) else False
        elif column.lower() == "availability_date":
            # Format date
            apartment[column] = str(value)[:10] if pd.notna(value) else ""
        else:
            # Handle regular string values
            apartment[column] = str(value) if pd.notna(value) else ""
    
    # Always add images for each apartment, regardless of Excel column
    apartment["images"] = find_apartment_images(apt_id)
    
    apartments.append(apartment)

# Output JSON (for embedding in React)
json_output = "export const mockApartments = " + json.dumps(apartments, indent=2) + ";"

# Save to file
output_path = r"C:\real-estate\web_th_city\import_data\mockApartments.js"
with open(output_path, "w") as f:
    f.write(json_output)

output_path 