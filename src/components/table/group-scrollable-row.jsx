import GroupColumn from "./grou-column";

const GroupScrollableRow = ({ row: task, cols }) => {
    console.log("🚀 ~ GroupScrollableRow ~ cols:", cols)
    console.log("🚀 ~ GroupScrollableRow ~ task:", task)
    return (
        <section className="group-scrollable-row">
            {cols.map(col => <GroupColumn column={col} value={task[col]} key={col} />)}
        </section>
    );
}

export default GroupScrollableRow;