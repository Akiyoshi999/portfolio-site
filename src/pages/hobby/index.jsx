import { useRouter } from "next/router";
import Hobby from "../../components/pages/Hobby";

export default function Profile() {
  const router = useRouter();
  return <Hobby />;
}
