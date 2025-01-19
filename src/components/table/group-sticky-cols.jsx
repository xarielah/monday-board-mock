const GroupStickyCols = ({ row: task }) => {
    return (
        <section className="group-sticky-cols">
            <div className="group-sticky-indicator" style={{ width: "5px", height: '100%', backgroundColor: "red" }}></div>
            <span className="group-sticky-checkbox"><input type="checkbox" /></span>
            <span className="group-sticky-title">{task.taskTitle}</span>
            <span className="group-sticky-details"><button>C</button></span>
        </section>
    );
}

export default GroupStickyCols;