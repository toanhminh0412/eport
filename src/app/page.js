import { checkEmailVerificationAction, checkLoggedInAction } from "@/actions/server/actions";


export default async function Home() {
  checkLoggedInAction();
  const user = checkEmailVerificationAction();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to Eport</h1>
    </main>
  )
}
