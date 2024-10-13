export type UsersParams = {
    userId:string
}

const UsersLayout: NextLayout<UsersParams> = (props) => {
    return (
        <div>
            Hello {props.params.userId} from UsersLayout
            {props.children}
        </div>
    );
}

export default UsersLayout