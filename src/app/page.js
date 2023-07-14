import { checkEmailVerificationAction, checkLoggedInAction } from "@/actions/server/actions";
import UpperNav from "@/components/UpperNav";


export default async function Home() {
  checkLoggedInAction();
  const user = checkEmailVerificationAction();

  return (
    <>
      <UpperNav/>
      <main className="prose p-24">
        <h1>Get your personal website started</h1>
        <h4>Select a template</h4>
      </main>
    </>
  )
}
