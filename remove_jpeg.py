import os
import glob

def remove_jpeg_files(source_dir):
    # Get all jpg/jpeg files recursively
    jpg_files = glob.glob(os.path.join(source_dir, '**/*.jpg'), recursive=True)
    jpeg_files = glob.glob(os.path.join(source_dir, '**/*.jpeg'), recursive=True)
    all_files = jpg_files + jpeg_files
    
    total_files = len(all_files)
    removed = 0
    total_saved = 0
    
    print(f"Found {total_files} JPEG files to check")
    
    for file_path in all_files:
        try:
            # Check if corresponding WebP file exists
            webp_path = os.path.splitext(file_path)[0] + '.webp'
            if os.path.exists(webp_path):
                # Get file size before removal
                file_size = os.path.getsize(file_path)
                
                # Remove the JPEG file
                os.remove(file_path)
                
                removed += 1
                total_saved += file_size
                print(f"Removed {removed}/{total_files}: {file_path}")
                print(f"Saved {file_size/1024:.1f}KB")
            else:
                print(f"Skipping {file_path} - No WebP counterpart found")
                
        except Exception as e:
            print(f"Error removing {file_path}: {str(e)}")
    
    print(f"\nCleanup complete!")
    print(f"Removed {removed} files")
    print(f"Total space saved: {total_saved/1024/1024:.1f}MB")

if __name__ == "__main__":
    source_dir = "public/images"
    remove_jpeg_files(source_dir) 