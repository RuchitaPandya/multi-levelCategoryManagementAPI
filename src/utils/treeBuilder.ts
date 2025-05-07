export function buildTree(categories: any[]) {
    const map = new Map();
    const roots: any[] = [];
  
    for (const cat of categories) {
      map.set(cat._id.toString(), { ...cat.toObject(), children: [] });
    }
  
    for (const cat of categories) {
      const id = cat._id.toString();
      if (cat.parent) {
        const parent = map.get(cat.parent.toString());
        if (parent) parent.children.push(map.get(id));
      } else {
        roots.push(map.get(id));
      }
    }
  
    return roots;
  }