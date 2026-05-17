"use client";

import React from "react";

export function Visit() {
  return (
    <section id="contact" className="bg-white py-20 md:py-28 px-6 lg:px-8 border-b border-brand-dark/5">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Contact Details */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-dark mb-6">
              Locations & Contact
            </h2>
            <p className="text-base text-brand-dark/65 mb-10 leading-relaxed">
              We look forward to welcoming you! Feel free to reach out to book tables, request private event bookings, or place large orders.
            </p>

            <ul className="space-y-8">
              {/* Address */}
              <li className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F9ECE0] text-xl border border-orange-100 shadow-sm">
                  📍
                </span>
                <div>
                  <p className="font-bold text-brand-dark">Storefront Address</p>
                  <p className="mt-1 text-sm text-brand-dark/70 leading-relaxed">
                    11022 South 51st Street Suite 105<br />
                    Phoenix, AZ 85044
                  </p>
                </div>
              </li>

              {/* Hours */}
              <li className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F3ECF8] text-xl border border-purple-100 shadow-sm">
                  🕒
                </span>
                <div>
                  <p className="font-bold text-brand-dark">Opening Hours</p>
                  <p className="mt-1 text-sm text-brand-dark/70">
                    Daily · 11:00 AM – 10:00 PM
                  </p>
                </div>
              </li>

              {/* Contact */}
              <li className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E6F5F2] text-xl border border-teal-100 shadow-sm">
                  📞
                </span>
                <div>
                  <p className="font-bold text-brand-dark">Get in Touch</p>
                  <p className="mt-1 text-sm text-brand-dark/70">
                    Phone:{" "}
                    <a href="tel:602-774-4735" className="hover:text-brand-orange font-semibold transition-colors">
                      602-774-4735
                    </a>
                  </p>
                  <p className="text-sm text-brand-dark/70">
                    Email:{" "}
                    <a href="mailto:hi@unidine.co" className="hover:text-brand-orange font-semibold transition-colors">
                      hi@unidine.co
                    </a>
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="tel:602-774-4735" className="btn-primary">
                Call Storefront
              </a>
              <a href="mailto:hi@unidine.co" className="btn-outline">
                Email General Enquiries
              </a>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="h-[380px] overflow-hidden rounded-[32px] border border-brand-dark/5 shadow-md lg:h-[450px] relative hover:shadow-lg transition-shadow duration-300">
            <iframe
              title="Unidine Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.3942008453476!2d-111.9774641!3d33.308726599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b04f7fe4d115b%3A0xe54e6378e9069d58!2s11022%20S%2051st%20St%20%23105%2C%20Phoenix%2C%20AZ%2085044%2C%20USA!5e0!3m2!1sen!2s!4v1716000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
