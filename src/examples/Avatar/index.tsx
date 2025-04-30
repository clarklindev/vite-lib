import { Layout, Avatar } from 'lib/components';
import avatar1 from '../../assets/avatar1.png';

const AvatarExample = () => {
    return (
        <>
            <Layout>
                <Avatar size={'S'} border={false} imageUrl={avatar1} />
            </Layout>
            <Layout>
                <Avatar size={'M'} border={false} imageUrl={avatar1} />
            </Layout>
            <Layout>
                <Avatar size={'L'} border={false} imageUrl={avatar1} />
            </Layout>
        </>
    );
};

export default AvatarExample;
