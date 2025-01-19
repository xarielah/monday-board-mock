const GroupStickyCols = ({ row: task, isHeader }) => {
    return (
        <section className="group-sticky-cols">
            <div className="group-sticky-indicator" style={{ width: "5px", height: '100%', backgroundColor: "red" }}></div>
            <span className="group-sticky-checkbox group-column-hover"><input type="checkbox" /></span>
            {isHeader && <>
                <span className="group-sticky-title-header group-column-hover" style={{ textAlign: 'center' }}>Task</span>
            </>}
            {!isHeader && <>
                <span className="group-sticky-title group-column-hover">{task.taskTitle}</span>
                <span className="group-sticky-details group-column-hover"><button>C</button></span>
            </>}
        </section>
    );
}

export default GroupStickyCols;