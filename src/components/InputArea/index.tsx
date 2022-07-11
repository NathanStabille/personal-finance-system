import { useState } from "react";
import { Item } from "../../types/Item";
import * as C from "./style";
import { categories } from "../../data/categories";
import { formatNewDate } from "../../helpers/dataFilter";

type Props = {
  onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const [dateField, setDateField] = useState("");
  const [selectField, setSelectField] = useState("");
  const [titleField, setTitleField] = useState("");
  const [valueField, setValueField] = useState(0);

  let categoryKeys: string[] = Object.keys(categories);

  const clearFields = () => {
    setDateField("");
    setSelectField("");
    setTitleField("");
    setValueField(0);
  };

  const handleAddEvent = () => {
    if (!dateField || !titleField || !selectField) {
      alert("Please, fill in all fields!");
    } else {
      let newItem: Item = {
        date: formatNewDate(dateField),
        category: selectField,
        title: titleField,
        value: valueField,
      };

      onAdd(newItem);
      clearFields();
    }
  };

  return (
    <C.Container>
      <input
        required
        type="date"
        value={dateField}
        onChange={(e) => {
          setDateField(e.target.value);
        }}
      />
      <select
        required
        value={selectField}
        onChange={(e) => setSelectField(e.target.value)}
      >
        {categoryKeys.map((key, index) => {
          return (
            <option value={key} key={index}>
              {categories[key].title}
            </option>
          );
        })}
      </select>
      <input
        required
        type="text"
        value={titleField}
        onChange={(e) => setTitleField(e.target.value)}
        placeholder="Title"
      />
      <input
        required
        type="number"
        value={valueField}
        placeholder="Value"
        onChange={(e) => setValueField(parseFloat(e.target.value))}
      />
      <button onClick={handleAddEvent}>Enter</button>
    </C.Container>
  );
};
