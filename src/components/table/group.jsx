import GroupContent from "./group-content";
import GroupFooter from "./group-footer";
import GroupHeader from "./group-header";
import "./group.css";

const Group = ({ group }) => {
    console.log("🚀 ~ Group ~ group:", group)
    return (
        <div className="group">
            <GroupHeader groupName={"Group #" + group.id} />
            <GroupContent rows={group.tasks} />
            <GroupFooter onAddTask={(taskName) => console.log("Adding Task: " + taskName)} />
        </div>
    );
}

export default Group;