import GroupColumn from "./group-column";

const GroupScrollableRow = ({ row: task, cols, isHeaders }) => {
    return (
        <section className="group-scrollable-row">

            {!isHeaders && cols.map(col => <GroupColumn column={col} value={task[col]} key={col} />)}
            {isHeaders && cols.map(col => <GroupColumn isHeader column={col} key={col} />)}
        </section>
    );
}

export default GroupScrollableRow;