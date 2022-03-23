import { Reorder } from "framer-motion";
import { useState } from "react";

const Environment = () => {
  const [items, setItems] = useState<string[]>(["Ace", "Kemi", "Fade", "Kike", "James", "Samson"])
  return (
    <Reorder.Group axis="y" values={items} onReorder={setItems}>
      <ul className="flex inline-flex flex-col">
        {items.map(item => (
          <Reorder.Item key={item} value={item}>
            <li className="p-10 bg-purple-600 text-white">{item}</li>
          </Reorder.Item>
        ))}
      </ul>
      {items}
    </Reorder.Group>
  )
}

export default Environment