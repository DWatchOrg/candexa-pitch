const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'app', 'pitch', 'slides');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 1. Add isActive prop
  content = content.replace(/export default function (\w+)\(\) \{/, 'export default function $1({ isActive }: { isActive?: boolean }) {');
  
  // 2. Replace the outer div to use the prop
  if (content.includes('style={{ display: \'flex\' }}')) {
      content = content.replace(/<div className="slide" id="s(\d+)" style={{ display: 'flex' }}>/, '<div className={`slide ${isActive ? "active" : ""}`} id="s$1">');
  } else {
      content = content.replace(/<div className="slide" id="s(\d+)">/, '<div className={`slide ${isActive ? "active" : ""}`} id="s$1">');
  }

  fs.writeFileSync(filePath, content);
  console.log('Fixed', file);
}
