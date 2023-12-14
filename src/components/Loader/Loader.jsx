import { LoaderWrapper } from './Loadrer.styled';
import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <Oval
        height={180}
        width={180}
        color="#2196f3"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#2196f3"
        strokeWidth={4}
        strokeWidthSecondary={2}
      />
    </LoaderWrapper>
  );
};