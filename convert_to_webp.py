import os
from PIL import Image
import glob

def convert_to_webp(source_dir):
    # Get all jpg/jpeg files recursively
    jpg_files = glob.glob(os.path.join(source_dir, '**/*.jpg'), recursive=True)
    jpeg_files = glob.glob(os.path.join(source_dir, '**/*.jpeg'), recursive=True)
    all_files = jpg_files + jpeg_files
    
    total_files = len(all_files)
    converted = 0
    total_saved = 0
    
    print(f"Found {total_files} images to convert")
    
    for file_path in all_files:
        try:
            # Create output path with .webp extension
            output_path = os.path.splitext(file_path)[0] + '.webp'
            
            # Open and convert image
            image = Image.open(file_path)
            
            # Convert to RGB if necessary (in case of RGBA)
            if image.mode in ('RGBA', 'LA'):
                background = Image.new('RGB', image.size, (255, 255, 255))
                background.paste(image, mask=image.split()[-1])
                image = background
            
            # Save as WebP with quality=80 (good balance between size and quality)
            image.save(output_path, 'WEBP', quality=80)
            
            # Calculate size difference
            original_size = os.path.getsize(file_path)
            new_size = os.path.getsize(output_path)
            saved = original_size - new_size
            total_saved += saved
            
            converted += 1
            print(f"Converted {converted}/{total_files}: {file_path}")
            print(f"Saved {saved/1024:.1f}KB ({saved/original_size*100:.1f}% reduction)")
            
        except Exception as e:
            print(f"Error converting {file_path}: {str(e)}")
    
    print(f"\nConversion complete!")
    print(f"Converted {converted} files")
    print(f"Total space saved: {total_saved/1024/1024:.1f}MB")

if __name__ == "__main__":
    source_dir = "public/images"
    convert_to_webp(source_dir) 