import { Navigate, Outlet, useParams } from "react-router-dom";
import { Note } from "../../types";

type Props = {
  notes: Note[];
};
const Layout = ({ notes }: Props) => {
  //urldeki id ' yi al.
  const { id } = useParams();

  // notes dizinde elemanı ara
  const found = notes.find((i) => i.id === id);

  // bulamazsak anasayfaya yönlendir.
  if (!found) return <Navigate to="/" replace />;

  // parent route içerisaidne alt routeu renderladık.
  // note verisini alt route a gönder.

  return <Outlet context={found} />;
};

export default Layout;
