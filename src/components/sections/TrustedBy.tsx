'use client';

import { motion } from 'framer-motion';

// High-quality SVG logos for trusted companies
const CompanyLogos = {
    Microsoft: () => (
        <svg viewBox="0 0 23 23" className="h-8 w-auto opacity-50 group-hover:opacity-100 transition-opacity">
            <path fill="currentColor" d="M0 0h11v11H0zM12 0h11v11H12zM0 12h11v11H0zM12 12h11v11H12z" />
        </svg>
    ),
    Google: () => (
        <svg viewBox="0 0 24 24" className="h-7 w-auto opacity-50 group-hover:opacity-100 transition-opacity">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
    ),
    Amazon: () => (
        <svg viewBox="0 0 24 24" className="h-7 w-auto opacity-50 group-hover:opacity-100 transition-opacity">
            <path fill="currentColor" d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.493.126.12.19.045.385-.206.55-.36.245-.86.516-1.5.812a17.11 17.11 0 0 1-6.89 1.82 17.11 17.11 0 0 1-8.49-1.82c-2.485-1.196-4.12-2.517-4.904-3.962a.623.623 0 0 1 .224-.805zm6.453-5.385c0-1.199.293-2.172.88-2.918.586-.747 1.362-1.12 2.327-1.12.992 0 1.77.36 2.335 1.08.565.72.848 1.666.848 2.836 0 1.22-.287 2.2-.863 2.94-.575.74-1.34 1.11-2.29 1.11-1.003 0-1.784-.373-2.344-1.118-.56-.745-.84-1.712-.84-2.9l-.053-.01zm5.75 5.1c.58.57 1.32.857 2.22.857 1.198 0 2.122-.493 2.77-1.48.65-.987.974-2.33.974-4.03 0-1.723-.322-3.08-.968-4.07-.646-.99-1.534-1.485-2.664-1.485-.93 0-1.683.296-2.26.888.02-.158.036-.31.05-.452.01-.142.016-.287.016-.434 0-.16-.006-.335-.02-.524-.012-.19-.03-.387-.057-.594l-2.475.156c.03.345.053.653.066.925.014.272.02.524.02.756v10.236l2.16-.13c.01-.28.014-.53.014-.748v-.77c.036.063.073.128.11.196l.044.088z" />
            <path fill="currentColor" d="M21.092 18.2c.546-.372.795-.2.745.515-.046.677-.463 1.22-1.25 1.627-.788.41-1.742.613-2.863.613-1.553 0-2.788-.433-3.706-1.297-.274-.267-.274-.523 0-.77.24-.205.463-.254.67-.147.206.107.456.276.75.507.575.445 1.28.668 2.114.668.834 0 1.502-.165 2.005-.494.504-.33.775-.766.815-1.31.04-.543-.188-.912-.685-1.107-.497-.195-1.126-.345-1.887-.45-.762-.106-1.465-.246-2.11-.42-.644-.176-1.18-.48-1.608-.91-.427-.43-.588-1.043-.48-1.838.106-.795.52-1.417 1.24-1.864.72-.448 1.574-.672 2.562-.672 1.07 0 2.014.205 2.834.614.308.15.408.38.3.688-.106.308-.34.41-.698.304-.694-.22-1.376-.33-2.045-.33-.67 0-1.215.122-1.636.364-.42.243-.664.586-.73 1.03-.068.443.082.775.447.996.366.22.883.38 1.55.474.67.095 1.317.212 1.944.353.627.14 1.146.404 1.555.79.41.387.574.957.49 1.712-.082.755-.438 1.37-1.068 1.845z" />
        </svg>
    ),
    Stripe: () => (
        <svg viewBox="0 0 24 24" className="h-7 w-auto opacity-50 group-hover:opacity-100 transition-opacity">
            <path fill="currentColor" d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" />
        </svg>
    ),
    Slack: () => (
        <svg viewBox="0 0 24 24" className="h-7 w-auto opacity-50 group-hover:opacity-100 transition-opacity">
            <path fill="currentColor" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
        </svg>
    ),
    Shopify: () => (
        <svg viewBox="0 0 24 24" className="h-7 w-auto opacity-50 group-hover:opacity-100 transition-opacity">
            <path fill="currentColor" d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.022-.116-.122-.2-.236-.2s-2.357-.163-2.357-.163-.87-.87-1.166-1.166c-.126-.125-.271-.153-.395-.153-.12 0-.233.024-.333.053l-.671.211c-.066-.199-.145-.44-.258-.696-.409-.93-1.012-1.42-1.736-1.42h-.046c-.061 0-.12 0-.181.012-.028-.024-.053-.049-.082-.07C12.073.596 11.67.47 11.195.475c-1.07.02-2.14.807-3.01 2.214-.609 1.006-1.076 2.269-1.208 3.246l-2.09.648c-.6.189-.62.209-.695.775C4.122 7.894 2 24 2 24l12.188 2.02 1.15-2.041zM13.35 7.23l-.185.057V7.05c0-.396-.054-.717-.13-.977l1.06.158c-.19.223-.38.535-.545.935a9.36 9.36 0 0 0-.2.065zm-1.16.36l-1.716.532c.176-.684.506-1.365.908-1.809.15-.166.358-.35.599-.46.245.522.315 1.23.21 1.738zm.57-3.062c.118 0 .221.013.31.04 0 0-.01.004-.032.013-.221.091-.449.313-.64.635-.275.462-.485 1.116-.597 1.762l-1.27.393c.252-1.025.888-2.837 2.23-2.843z" />
        </svg>
    ),
    Salesforce: () => (
        <svg viewBox="0 0 24 24" className="h-7 w-auto opacity-50 group-hover:opacity-100 transition-opacity">
            <path fill="currentColor" d="M10.006 5.415a4.195 4.195 0 0 1 3.045-1.306c1.56 0 2.954.9 3.69 2.205.63-.3 1.35-.45 2.1-.45 2.85 0 5.159 2.34 5.159 5.22s-2.31 5.22-5.16 5.22c-.345 0-.69-.045-1.02-.105a3.9 3.9 0 0 1-3.315 1.845c-.63 0-1.245-.15-1.785-.42a4.59 4.59 0 0 1-4.125 2.595c-2.13 0-3.96-1.455-4.485-3.42a3.96 3.96 0 0 1-.615.045 4.005 4.005 0 0 1-3.495-5.955A4.425 4.425 0 0 1 2.25 5.25a4.38 4.38 0 0 1 3.225 1.41c.705-.855 1.77-1.38 2.955-1.38a3.78 3.78 0 0 1 1.575.33v.005z" />
        </svg>
    ),
    IBM: () => (
        <svg viewBox="0 0 24 24" className="h-6 w-auto opacity-50 group-hover:opacity-100 transition-opacity">
            <path fill="currentColor" d="M0 8.576h3.849v.96H0zm5.13 0h3.848v.96H5.13zm12.735 0H24v.96h-6.135zM0 10.496h3.849v.96H0zm5.13 0h7.697v.96H5.13zm8.977 0H24v.96h-9.893zM0 12.416h3.849v.96H0zm5.13 0h7.697v.96H5.13zm8.977 0H24v.96h-9.893zM0 14.336h3.849v.96H0zm5.13 0h7.697v.96H5.13zm8.977 0H24v.96h-9.893z" />
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
];

export default function TrustedBy() {
    return (
        <section className="relative py-20 border-y border-white/5">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-sm text-white/40 uppercase tracking-widest">
                        Trusted by Industry Leaders
                    </span>
                </motion.div>

                {/* Logo Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center"
                >
                    {companies.map((company, index) => (
                        <motion.div
                            key={company.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group text-white/30 hover:text-white transition-colors cursor-default"
                            title={company.name}
                        >
                            <company.Logo />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16"
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
            </div>
        </section>
    );
}
