type Props = {}
import { SignUp } from "@clerk/nextjs"
const page = (props: Props) => {
    return (
        <div className="flex justify-center">
            <SignUp></SignUp>
        </div>
    )
}
export default page
