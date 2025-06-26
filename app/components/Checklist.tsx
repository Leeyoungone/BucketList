import Fruits from '@/app/types/options.types';
import { useState } from 'react';


export default function Checklist({fruits} : { fruits: Fruits[]}) {
    
    const [myList, setMyList] = useState(fruits); 
    
    function handleChecklist(id: number, isChecked: boolean) {
        setMyList(myList.map(fruit => {
            if(fruit.id === id) {
                return { ...fruit, checked: isChecked }
            } else {
                return fruit
            }
        }));
    }

    return( 
        <>
        <h1> list of things </h1>
            <ItemList
                fruits={myList}
                onToggle={handleChecklist}            
            />
        </>
    );
}
function ItemList({ fruits, onToggle }: { fruits: Fruits[], onToggle: (calories: number, isChecked: boolean) => void }) {
    return(
        <ul>
            {fruits.map((fruit) => (
            <li key={fruit.id}>
                <label>
                    <input
                        type="checkbox"
                        checked={fruit.checked}
                        onChange={e => {
                            onToggle(
                                fruit.id, 
                                e.target.checked
                            )
                        }}
                    />
                    {fruit.name}
                </label>
            </li>
        ))}
        </ul>
    ); 
}