import { SignIn } from "@clerk/nextjs"
type Props = {}

const page = (props: Props) => {
    return (
        <div className="flex justify-center">
            <SignIn></SignIn>
        </div>
    )
}
export default page
