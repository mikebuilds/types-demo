import { UsersParams } from "./layout";

const UsersPage: NextPage<UsersParams> = (props) => {
    return (
        <div>
            Hello {props.params.userId} from UsersPage
        </div>
    );
}

export default UsersPage