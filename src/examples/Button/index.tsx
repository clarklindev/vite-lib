import { Button, Icon, Label, Layout } from 'lib/components';
import { ShoppingCartIcon, ThumbsUpIcon } from 'lib/icons';

const ButtonExample = () => {
    return (
        <>
            <Layout>
                <Button intent="primary">Contained</Button>
            </Layout>
            <Layout>
                <Button intent="outlined">Outlined</Button>
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
