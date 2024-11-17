import React, { useState, useMemo } from 'react';

export default function FilterListExample() {
    const [searchTerm, setSearchTerm] = useState("");
    const [items] = useState(["Apple", "Banana", "Grapes", "Orange", "Pineapple", "Mango"]);

    // Filter the list based on search term
    const filteredItems = useMemo(() => {
        console.log("Filtering items...");
        return items.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [searchTerm, items]);

    return (
        <div>
            <input 
                type="text" 
                placeholder="Search items" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
