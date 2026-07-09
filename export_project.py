import os

# जिन फोल्डर्स और फाइल्स का कोड हमें नहीं चाहिए, उन्हें यहाँ लिस्ट किया है
IGNORE_DIRS = {
    '.git', 'node_modules', 'venv', '.venv', 'env', '__pycache__', 
    'dist', 'build', '.next', '.vercel'
}
IGNORE_FILES = {
    'package-lock.json', 'yarn.lock', 'poetry.lock', 'project_summary.txt',
    'export_project.py', '.DS_Store', 'thumbs.db'
}
# सिर्फ टेक्स्ट/कोड फाइल्स को रीड करने के लिए एक्सटेंशन (आप चाहें तो और जोड़ सकते हैं)
ALLOWED_EXTENSIONS = {
    '.py', '.js', '.jsx', '.ts', '.tsx', '.html', '.css', 
    '.json', '.md', '.env.example', '.ini', '.cfg'
}

def generate_summary(root_dir, output_file):
    print("🚀 प्रोजेक्ट को स्कैन किया जा रहा है...")
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("==================================================\n")
        f.write(f"PROJECT SUMMARY GENERATED FOR GEMINI\n")
        f.write(f"Root Directory: {os.path.basename(os.path.abspath(root_dir))}\n")
        f.write("==================================================\n\n")
        
        # 1. पहले पूरा फोल्डर स्ट्रक्चर (Tree) लिखेंगे
        f.write("### 1. PROJECT STRUCTURE (FOLDER TREE) ###\n\n")
        for root, dirs, files in os.walk(root_dir):
            # इग्नोर करने वाले फोल्डर्स को हटाओ
            dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
            
            level = root.replace(root_dir, '').count(os.sep)
            indent = ' ' * 4 * (level)
            f.write(f"{indent}[DIR] {os.path.basename(root)}/\n")
            sub_indent = ' ' * 4 * (level + 1)
            for file in files:
                if file not in IGNORE_FILES:
                    f.write(f"{sub_indent}[FILE] {file}\n")
                    
        f.write("\n" + "="*50 + "\n\n")
        
        # 2. अब हर फाइल का पाथ और उसका कोड लिखेंगे
        f.write("### 2. FILE CONTENTS (CODE) ###\n\n")
        for root, dirs, files in os.walk(root_dir):
            dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
            
            for file in files:
                if file in IGNORE_FILES:
                    continue
                    
                file_path = os.path.join(root, file)
                relative_path = os.path.relpath(file_path, root_dir)
                _, ext = os.path.splitext(file)
                
                if ext.lower() in ALLOWED_EXTENSIONS or file.startswith('.'):
                    f.write(f"// FILE_PATH: {relative_path}\n")
                    f.write(f"// START_OF_FILE: {file}\n")
                    f.write("-" * 40 + "\n")
                    
                    try:
                        with open(file_path, 'r', encoding='utf-8', errors='replace') as code_file:
                            f.write(code_file.read())
                    except Exception as e:
                        f.write(f"[ERROR READING FILE]: {str(e)}\n")
                        
                    f.write("\n" + "-" * 40 + "\n")
                    f.write(f"// END_OF_FILE: {file}\n\n\n")
                    
    print(f"✅ सफलता! आपकी फाइल तैयार है: {output_file}")

if __name__ == "__main__":
    # इसी फोल्डर में रन होगा जहाँ स्क्रिप्ट रखी है
    current_directory = os.path.dirname(os.path.abspath(__file__))
    output_filename = "project_summary.txt"
    generate_summary(current_directory, output_filename)