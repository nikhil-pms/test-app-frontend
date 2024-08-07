
import DashboardPage from "@/components/Dashboard";
import { cookies } from "next/headers";
// import { useRouter } from "next/navigation";

const page = () => {

  const cookieStore = cookies()
  const theme = cookieStore.get('accesstoken')
  // const router = useRouter()

console.log(theme);

// if (theme) {
//   router.push("/login")
// }

  return (
    <div>
      <DashboardPage  token={theme}/>
    </div>
  );
};

export default page;
