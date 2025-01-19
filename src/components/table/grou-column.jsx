const GroupColumn = ({ column, value }) => {
    console.log("🚀 ~ GroupColumn ~ column:", column)
    console.log("🚀 ~ GroupColumn ~ value:", value)
    return (
        <section className="group-column">
            <span>{column}</span>
            <span>{JSON.stringify(value)}</span>
        </section>
    );
}

export default GroupColumn;