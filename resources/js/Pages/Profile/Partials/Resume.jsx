import { useRef, useState } from "react";
import { FiFilePlus } from "react-icons/fi";
import CardLayout from "./CardLayout";
import FormAddResume from "../Forms/Resume/FormAddResume";
import { Document, Page } from "react-pdf";
import { Link } from "@inertiajs/react";
import DeleteModal from "../Forms/DeleteModal";

function Resume({ data }) {
    return (
        <CardLayout
            cardName="Resume"
            Icon={FiFilePlus}
            FormModal={FormAddResume}
            replaceIcon
        >
            <>
                {data ? (
                    <div className="flexible justify-between bg-slate-500/10 py-3 px-4 rounded-lg">
                        <a href={data} target="_BLANK">
                            <h1 className="text-lg hover:text-primary">
                                Click to view resume
                            </h1>
                        </a>
                        <div className="buttons flex gap-2">
                            <DeleteModal routeDelete="resume.delete" />
                        </div>
                    </div>
                ) : (
                    <h1 className="opacity-[0.5]">No resume uploaded.</h1>
                )}
            </>
        </CardLayout>
    );
}
export default Resume;
