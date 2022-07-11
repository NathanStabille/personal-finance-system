import * as C from "./style";
import { Item } from "../../types/Item";
import {TableItem} from "../TableItem/index"

type Props = {
  list: Item[];
};

export const TableArea = ({ list }: Props) => {

  
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={130}>Date</C.TableHeadColumn>
          <C.TableHeadColumn width={130}>Category</C.TableHeadColumn>
          <C.TableHeadColumn>Title</C.TableHeadColumn>
          <C.TableHeadColumn width={150}>Value</C.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => {
          return (
            <TableItem key={index} item={item}/>
          );
        })}
      </tbody>
    </C.Table>
  );
};


