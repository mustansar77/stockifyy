import Image from "next/image";
import Link from "next/link";

import { site } from "@/content/site";
import { services } from "@/content/services";

import logo from "../../../public/images/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-[#FFF7E9] border-t border-[#E8DDC8] mt-32">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src={logo}
                alt="Stockifyy Logo"
                width={180}
                height={60}
                priority
                className="h-14 w-auto"
              />
            </Link>

            <p className="font-sans text-sm text-gray-600 max-w-md leading-7">
              Our mission at Stockifyy is to make Shariah-compliant investing
              easy and reliable for everyone, whether you are just starting
              your investment journey or already active in the market. We
              provide clear, research-driven guidance to help investors make
              informed financial decisions.
            </p>

            {/* <div className="mt-6 space-y-2 font-sans text-sm text-gray-500">
              <p>{site.address}</p>
              <p>{site.email}</p>
              <p>{site.phone}</p>
            </div> */}
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-[#986300] font-semibold mb-5">
              Services
            </h4>

            <ul className="space-y-3 font-sans text-sm text-gray-600">
              {services.slice(0, 3).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="transition-colors hover:text-[#986300]"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  href="/services"
                  className="font-medium text-[#986300] hover:text-[#FEA500] transition-colors"
                >
                  All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-[#986300] font-semibold mb-5">
              Company
            </h4>

            <ul className="space-y-3 font-sans text-sm text-gray-600">
              <li>
                <Link
                  href="/blog"
                  className="transition-colors hover:text-[#986300]"
                >
                  Insights
                </Link>
              </li>

              <li>
                <Link
                  href="/#about"
                  className="transition-colors hover:text-[#986300]"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/#faq"
                  className="transition-colors hover:text-[#986300]"
                >
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  href="/#contact"
                  className="transition-colors hover:text-[#986300]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-[#E8DDC8]" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} {site.fullName}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-[#986300] transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="hover:text-[#986300] transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}