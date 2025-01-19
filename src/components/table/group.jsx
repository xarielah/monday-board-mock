import GroupContent from "./group-content";
import GroupFooter from "./group-footer";
import GroupHeader from "./group-header";
import "./group.css";

const Group = ({ group }) => {
    const cols = Object.keys(group.tasks[0]).filter(key => key !== "id" && key !== "taskTitle");
    return (
        <div className="group">
            <GroupHeader groupName={"Group #" + group.id} />
            <GroupContent rows={group.tasks} cols={cols} />
            <GroupFooter onAddTask={(taskName) => console.log("Adding Task: " + taskName)} />
        </div>
    );
}

export default Group;