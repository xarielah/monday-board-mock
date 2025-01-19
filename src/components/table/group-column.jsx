const GroupColumn = ({ column, value, isHeader }) => {
    return (
        <section className="group-column group-column-hover" style={{ textAlign: isHeader ? 'center' : 'inherit' }}>
            <span>{column}</span>
            {value && <span>{JSON.stringify(value)}</span>}
        </section>
    );
}

export default GroupColumn;