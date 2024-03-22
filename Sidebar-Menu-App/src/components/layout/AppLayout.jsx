import Blank from '../../pages/Blank';
import Sidebar from '../sidebar/Sidebar'

const AppLayout = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Sidebar />
      <Blank/>
    </div>
  );
};

export default AppLayout;
