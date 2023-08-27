"use client";

import va from "@vercel/analytics";
import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL } from "@/constants";
import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

function SocialMediaItem({
  icon,
  url,
  name,
}: {
  icon: React.ReactNode;
  url: string;
  name: string;
}) {
  return (
    <span
      className="social-icon hover:scale-95 bg-gray-100/20 hover:bg-[var(--primary)] fcenter relative cursor-pointer trans group overflow-hidden"
      onClick={(e) => {
        e.preventDefault();
        // va.track("ClickSocialMedia", {
        //   name,
        // });
        window.open(url, "_blank");
      }}
    >
      <div className="absolute top-[50%] group-hover:translate-y-[-250%] translate-y-[-50%] trans">
        {icon}
      </div>
      <div className="absolute top-[50%] group-hover:translate-y-[-50%] translate-y-[250%] trans">
        {icon}
      </div>
    </span>
  );
}

export function SocialMedia() {
  return (
    <div className="flex items-center gap-6">
      <SocialMediaItem
        icon={<FaLinkedinIn />}
        url={LINKEDIN_URL}
        name="LinkedIn"
      />
      <SocialMediaItem
        icon={<FaGithub />}
        url={GITHUB_URL}
        name="Github"
      />
      <SocialMediaItem
        icon={<AiFillMail />}
        url={EMAIL_URL}
        name="Email"
      />
      {/* <SocialMediaItem icon={< />} url={GITHUB_URL} /> */}
    </div>
  );
}
