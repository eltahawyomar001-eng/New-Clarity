'use client';

import { motion } from 'framer-motion';

// High-quality SVG logos for trusted companies
const CompanyLogos = {
    Microsoft: () => (
        <svg viewBox="0 0 23 23" className="h-8 w-auto">
            <path fill="currentColor" d="M0 0h11v11H0zM12 0h11v11H12zM0 12h11v11H0zM12 12h11v11H12z" />
        </svg>
    ),
    Google: () => (
        <svg viewBox="0 0 24 24" className="h-7 w-auto">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
    ),
    Amazon: () => (
        <svg viewBox="0 0 24 24" className="h-7 w-auto">
            <path fill="currentColor" d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.493.126.12.19.045.385-.206.55-.36.245-.86.516-1.5.812a17.11 17.11 0 0 1-6.89 1.82 17.11 17.11 0 0 1-8.49-1.82c-2.485-1.196-4.12-2.517-4.904-3.962a.623.623 0 0 1 .224-.805z" />
        </svg>
    ),
    Stripe: () => (
        <svg viewBox="0 0 24 24" className="h-7 w-auto">
            <path fill="currentColor" d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" />
        </svg>
    ),
    Slack: () => (
        <svg viewBox="0 0 24 24" className="h-7 w-auto">
            <path fill="currentColor" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
        </svg>
    ),
    Shopify: () => (
        <svg viewBox="0 0 24 24" className="h-7 w-auto">
            <path fill="currentColor" d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.022-.116-.122-.2-.236-.2s-2.357-.163-2.357-.163-.87-.87-1.166-1.166c-.126-.125-.271-.153-.395-.153-.12 0-.233.024-.333.053l-.671.211c-.066-.199-.145-.44-.258-.696-.409-.93-1.012-1.42-1.736-1.42h-.046c-.061 0-.12 0-.181.012-.028-.024-.053-.049-.082-.07C12.073.596 11.67.47 11.195.475c-1.07.02-2.14.807-3.01 2.214-.609 1.006-1.076 2.269-1.208 3.246l-2.09.648c-.6.189-.62.209-.695.775C4.122 7.894 2 24 2 24l12.188 2.02 1.15-2.041z" />
        </svg>
    ),
    Salesforce: () => (
        <svg viewBox="0 0 24 24" className="h-7 w-auto">
            <path fill="currentColor" d="M10.006 5.415a4.195 4.195 0 0 1 3.045-1.306c1.56 0 2.954.9 3.69 2.205.63-.3 1.35-.45 2.1-.45 2.85 0 5.159 2.34 5.159 5.22s-2.31 5.22-5.16 5.22c-.345 0-.69-.045-1.02-.105a3.9 3.9 0 0 1-3.315 1.845c-.63 0-1.245-.15-1.785-.42a4.59 4.59 0 0 1-4.125 2.595c-2.13 0-3.96-1.455-4.485-3.42a3.96 3.96 0 0 1-.615.045 4.005 4.005 0 0 1-3.495-5.955A4.425 4.425 0 0 1 2.25 5.25a4.38 4.38 0 0 1 3.225 1.41c.705-.855 1.77-1.38 2.955-1.38a3.78 3.78 0 0 1 1.575.33v.005z" />
        </svg>
    ),
    IBM: () => (
        <svg viewBox="0 0 24 24" className="h-6 w-auto">
            <path fill="currentColor" d="M0 8.576h3.849v.96H0zm5.13 0h3.848v.96H5.13zm12.735 0H24v.96h-6.135zM0 10.496h3.849v.96H0zm5.13 0h7.697v.96H5.13zm8.977 0H24v.96h-9.893zM0 12.416h3.849v.96H0zm5.13 0h7.697v.96H5.13zm8.977 0H24v.96h-9.893zM0 14.336h3.849v.96H0zm5.13 0h7.697v.96H5.13zm8.977 0H24v.96h-9.893z" />
        </svg>
    ),
    Oracle: () => (
        <svg viewBox="0 0 24 24" className="h-6 w-auto">
            <path fill="currentColor" d="M6.206 9.744a2.256 2.256 0 1 0 0 4.512h11.588a2.256 2.256 0 1 0 0-4.512H6.206zM17.794 16H6.206a4 4 0 1 1 0-8h11.588a4 4 0 1 1 0 8z" />
        </svg>
    ),
    Nvidia: () => (
        <svg viewBox="0 0 24 24" className="h-6 w-auto">
            <path fill="currentColor" d="M8.948 8.798c.065-.026.13-.052.197-.077V6.539c-.099.017-.196.036-.293.057-2.897.619-4.843 3.138-4.843 3.138.697 3.225 3.6 5.484 7.063 5.484v-2.096c-2.165-.001-3.807-1.416-3.807-3.164 0-.74.271-1.442.782-2.004a2.974 2.974 0 0 1 .9-.156zm1.797.113V6.698a6.463 6.463 0 0 0-1.174.178v2.147c.133-.038.27-.072.408-.099a4.53 4.53 0 0 1 .766-.013z" />
        </svg>
    ),
    Meta: () => (
        <svg viewBox="0 0 24 24" className="h-7 w-auto">
            <path fill="currentColor" d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a4.892 4.892 0 0 0 1.12 2.014c.521.556 1.198.873 1.984.873.652 0 1.291-.185 1.873-.556a6.444 6.444 0 0 0 1.495-1.419c.42-.546.736-1.112.948-1.594.212-.483.318-.851.318-1.102 0-.151-.022-.291-.065-.421a.877.877 0 0 0-.203-.332.768.768 0 0 0-.311-.206.927.927 0 0 0-.357-.07c-.251 0-.496.103-.734.31-.239.206-.507.47-.805.79-.298.32-.627.656-.986 1.005a6.82 6.82 0 0 1-1.15.905c-.203.124-.417.186-.644.186a1.37 1.37 0 0 1-.625-.15 1.397 1.397 0 0 1-.493-.432 2.067 2.067 0 0 1-.318-.644 2.898 2.898 0 0 1-.112-.799c0-.915.203-1.92.609-3.016.406-1.098.972-2.076 1.696-2.937.724-.861 1.472-1.291 2.244-1.291.451 0 .835.131 1.15.392.316.262.534.595.654 1.001.12.406.18.822.18 1.25 0 .678-.121 1.419-.363 2.222-.242.803-.52 1.569-.835 2.297-.315.728-.59 1.286-.825 1.673-.235.388-.353.582-.353.582h2.256s.067-.11.201-.33c.135-.22.318-.535.551-.945.233-.41.499-.918.796-1.522.298-.604.573-1.31.825-2.117.251-.807.377-1.676.377-2.607 0-.655-.095-1.28-.284-1.875a4.488 4.488 0 0 0-.835-1.556 3.987 3.987 0 0 0-1.359-.997A4.155 4.155 0 0 0 6.915 4.03z" />
        </svg>
    ),
    Adobe: () => (
        <svg viewBox="0 0 24 24" className="h-6 w-auto">
            <path fill="currentColor" d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884l8.884 21.248z" />
        </svg>
    ),
};

const companies = [
    { name: 'Microsoft', Logo: CompanyLogos.Microsoft },
    { name: 'Google', Logo: CompanyLogos.Google },
    { name: 'Amazon', Logo: CompanyLogos.Amazon },
    { name: 'Stripe', Logo: CompanyLogos.Stripe },
    { name: 'Slack', Logo: CompanyLogos.Slack },
    { name: 'Shopify', Logo: CompanyLogos.Shopify },
    { name: 'Salesforce', Logo: CompanyLogos.Salesforce },
    { name: 'IBM', Logo: CompanyLogos.IBM },
    { name: 'Oracle', Logo: CompanyLogos.Oracle },
    { name: 'Nvidia', Logo: CompanyLogos.Nvidia },
    { name: 'Meta', Logo: CompanyLogos.Meta },
    { name: 'Adobe', Logo: CompanyLogos.Adobe },
];

export default function TrustedBy() {
    return (
        <section className="relative py-16 overflow-hidden border-y border-white/5">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-10"
            >
                <span className="text-sm text-white/40 uppercase tracking-widest">
                    Trusted by Industry Leaders
                </span>
            </motion.div>

            {/* Infinite Scrolling Logo Track */}
            <div className="relative">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-nc-black to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-nc-black to-transparent z-10 pointer-events-none" />

                {/* Scrolling Container */}
                <motion.div
                    className="flex gap-16 items-center"
                    animate={{
                        x: ['0%', '-50%'],
                    }}
                    transition={{
                        x: {
                            duration: 30,
                            repeat: Infinity,
                            ease: 'linear',
                        },
                    }}
                >
                    {/* First set of logos */}
                    {companies.map((company) => (
                        <div
                            key={company.name}
                            className="flex-shrink-0 text-white/30 hover:text-white/60 transition-colors duration-300"
                            title={company.name}
                        >
                            <company.Logo />
                        </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {companies.map((company) => (
                        <div
                            key={`${company.name}-dup`}
                            className="flex-shrink-0 text-white/30 hover:text-white/60 transition-colors duration-300"
                            title={company.name}
                        >
                            <company.Logo />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Trust Indicators */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-14 flex flex-wrap items-center justify-center gap-8 md:gap-16 px-6"
            >
                {[
                    { value: '150+', label: 'Projects Delivered' },
                    { value: '45+', label: 'Enterprise Clients' },
                    { value: '98%', label: 'Client Satisfaction' },
                    { value: 'SOC 2', label: 'Compliant' },
                ].map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="text-center"
                    >
                        <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                        <div className="text-xs text-white/40 mt-1">{stat.label}</div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
