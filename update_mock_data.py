import re

def update_mock_data():
    # Read the mock data file
    with open('src/data/mockApartments.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace all .jpeg extensions with .webp
    updated_content = re.sub(r'\.jpeg"', '.webp"', content)
    
    # Write the updated content back to the file
    with open('src/data/mockApartments.js', 'w', encoding='utf-8') as f:
        f.write(updated_content)
    
    print("Updated mock data to use WebP images")

if __name__ == "__main__":
    update_mock_data() 