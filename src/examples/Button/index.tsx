import { Button, Icon, Label, Layout } from 'lib/components';
import { HiShoppingCart as ShoppingCartIcon, HiOutlineHandThumbUp as ThumbsUpIcon } from 'react-icons/hi2';

const ButtonExample = () => {
    return (
        <>
            <Layout>
                <Button intent="primary" className="hover:bg-red-800 dark:hover:bg-red-300">
                    primary
                </Button>
            </Layout>
            <Layout>
                <Button intent="secondary" className="hover:bg-current/30">
                    secondary
                </Button>
            </Layout>
            <Layout>
                <Button intent="contained" className="hover:bg-gray-400">
                    Contained
                </Button>
            </Layout>
            <Layout>
                <Button intent="outlined" className="hover:bg-black hover:text-white dark:hover:text-black dark:hover:bg-white">
                    Outlined
                </Button>
            </Layout>
            <Layout>
                <Button intent="icon">
                    <Icon size="L">
                        <ShoppingCartIcon />
                    </Icon>
                </Button>
            </Layout>
            <Layout>
                <Button intent="text">Text</Button>
            </Layout>
            <Layout>
                <Button intent="contained" className="bg-red-500 hover:bg-red-600 text-white">
                    <Label gap="10px" label="right" labelDirection="right">
                        <Icon size="L">
                            <ThumbsUpIcon stroke="blue" />
                        </Icon>
                    </Label>
                </Button>
            </Layout>
        </>
    );
};

export default ButtonExample;
