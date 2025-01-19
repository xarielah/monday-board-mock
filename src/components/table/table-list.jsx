import Group from "./group";
import { groups } from "./groups";


const TableList = () => {
    return (
        <section className="table-list">
            {groups.map(group => <Group group={group} key={group.id} />)}
        </section>
    );
}

export default TableList;