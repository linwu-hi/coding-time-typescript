const fs = require('fs');
const path = require('path');

function writeToMarkdownFiles(directory, content) {
  // 递归遍历目录
  function traverseDirectory(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);
      if (stats.isDirectory()) {
        // 如果是目录，则递归遍历子目录
        traverseDirectory(filePath);
      } else if (stats.isFile() && path.extname(file) === '.md') {
        // 如果是md文件，则向文件头部写入内容
        const data = fs.readFileSync(filePath, 'utf8');
        const updatedData = `---\n${content}\n---\n\n${data}`;
        fs.writeFileSync(filePath, updatedData);
        console.log(`Updated ${filePath}`);
      }
    });
  }

  traverseDirectory(directory);
}

// 示例用法：
const directoryPath = '/Users/vnues/Desktop/coding-time-typescript/docs'; // 替换为实际的目录路径
const frontmatterContent = 'theme: nico'; // 替换为要写入的内容

writeToMarkdownFiles(directoryPath, frontmatterContent);
