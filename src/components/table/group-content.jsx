import GroupScrollableRow from "./group-scrollable-row";
import GroupStickyCols from "./group-sticky-cols";

const GroupContent = ({ rows, cols }) => {
    console.log("🚀 ~ GroupContent ~ rows:", cols)
    return (
        <main className="group-content">
            <section className="group-rows-wrapper">
                <GroupStickyCols isHeader />
                <GroupScrollableRow cols={cols} isHeaders />
            </section>
            {rows.map(row => (
                <section className="group-rows-wrapper">
                    <GroupStickyCols row={row} key={row.id} />
                    <GroupScrollableRow row={row} cols={Object.keys(row).filter(key => key !== "id" && key !== "taskTitle")} key={row.id} />
                </section>
            ))}
        </main>
    );
}

export default GroupContent;