import { FC } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";

interface PageProps {
    data: any;
}

export const getStaticProps = async () => {
    const result: PageProps = {
        data: {
            price: 100,
            name: "Andrej",
            vat: 21
        }
    };

    return { props: { result } };
};

const Page: FC<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
    return (
        <>
            <p>Číslo: {props.result.data.price}</p>
            <p>Obsah: {props.result.data.vat}</p>
        </>
    );
};

export default Page;
