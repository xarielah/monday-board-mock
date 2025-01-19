import GroupScrollableRow from "./group-scrollable-row";
import GroupStickyCols from "./group-sticky-cols";

const GroupContent = ({ rows }) => {
    return (
        <main className="group-content">
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