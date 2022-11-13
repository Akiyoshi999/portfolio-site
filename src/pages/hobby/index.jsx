import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();
  return (
    <div>
      <a>{router.pathname} Page</a>
    </div>
  );
}
