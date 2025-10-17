import React from "react";

const styles = {
    footer: {
        background: "#0f1724",
        color: "#e6eef8",
        padding: "40px 20px",
        fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
        fontSize: 15,
    },
    container: {
        maxWidth: 1100,
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        gap: 24,
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    column: {
        minWidth: 220,
        flex: "1 1 220px",
    },
    brand: {
        fontSize: 18,
        fontWeight: 700,
        marginBottom: 8,
        color: "#fff",
    },
    paragraph: {
        lineHeight: 1.5,
        color: "#cbd7e6",
        margin: 0,
    },
    list: {
        listStyle: "none",
        padding: 0,
        margin: "8px 0 0 0",
    },
    item: {
        marginBottom: 8,
        display: "flex",
        gap: 8,
        alignItems: "center",
        color: "#cbd7e6",
        textDecoration: "none",
    },
    icon: {
        width: 18,
        height: 18,
        display: "inline-block",
        verticalAlign: "middle",
        flexShrink: 0,
    },
    bottomBar: {
        borderTop: "1px solid rgba(255,255,255,0.06)",
        marginTop: 28,
        paddingTop: 18,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 12,
        flexWrap: "wrap",
        color: "#9fb1d3",
        fontSize: 13,
    },
    social: {
        display: "flex",
        gap: 12,
        alignItems: "center",
    },
    socialLink: {
        color: "#cbd7e6",
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
    },
};

export default function AboutUs() {
    return (
        <footer style={styles.footer} aria-label="About and contact information">
            <div style={styles.container}>
                <div style={styles.column}>
                    <div style={styles.brand}>Chatbot UI</div>
                    <p style={styles.paragraph}>
                        A lightweight React chat interface built for modern workflows. We aim to make AI
                        assistants approachable, accessible, and easy to integrate into your existing apps.
                    </p>
                </div>

                <div style={styles.column}>
                    <div style={{ fontWeight: 700, marginBottom: 8 }}>Contact</div>
                    <ul style={styles.list}>
                        <li style={styles.item}>
                            <svg style={styles.icon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path
                                    d="M3 5.5A2.5 2.5 0 015.5 3h13A2.5 2.5 0 0121 5.5v13a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 18.5v-13z"
                                    stroke="#9fb1d3"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M21 7.5l-9 6-9-6"
                                    stroke="#9fb1d3"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <a href="mailto:hello@example.com" style={{ color: "inherit", textDecoration: "none" }}>
                                hello@example.com
                            </a>
                        </li>

                        <li style={styles.item}>
                            <svg style={styles.icon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path
                                    d="M2 7.5a2 2 0 012-2h3.5a1 1 0 01.9.55l1.4 3A1 1 0 0110 10h0a13 13 0 006.99 6.99h0a1 1 0 01.95.7l1.05 3.06A1 1 0 0020.5 22H21a2 2 0 002-2v-3.5a2 2 0 00-2-2h-1.5"
                                    stroke="#9fb1d3"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <a href="tel:+1234567890" style={{ color: "inherit", textDecoration: "none" }}>
                                +1 (234) 567-890
                            </a>
                        </li>

                        <li style={styles.item}>
                            <svg style={styles.icon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <rect x="3" y="6" width="18" height="12" rx="2" stroke="#9fb1d3" strokeWidth="1.2" />
                                <path
                                    d="M3 8l9 6 9-6"
                                    stroke="#9fb1d3"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span>123 Main St, Suite 400, Cityville</span>
                        </li>
                    </ul>
                </div>

                <div style={styles.column}>
                    <div style={{ fontWeight: 700, marginBottom: 8 }}>Connect</div>
                    <nav style={styles.social} aria-label="Social links">
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.socialLink}
                        >
                            <svg style={styles.icon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path
                                    d="M12 2C7.58 2 4 5.58 4 10c0 3.54 2.29 6.54 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.2 1.87.86 2.33.66.07-.52.28-.86.51-1.06-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.6 7.6 0 0112 6.8c.68.003 1.37.092 2.01.27 1.52-1.03 2.19-.82 2.19-.82.45 1.1.17 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.01 8.01 0 0020 10c0-4.42-3.58-8-8-8z"
                                    stroke="#9fb1d3"
                                    strokeWidth="0.4"
                                    fill="#cbd7e6"
                                />
                            </svg>
                            GitHub
                        </a>

                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.socialLink}
                        >
                            <svg style={styles.icon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path
                                    d="M4.98 3.5A2.5 2.5 0 002.5 6v12A2.5 2.5 0 004.98 20.5h.02A2.5 2.5 0 0010 18V6a2.5 2.5 0 00-5.02-2.5zM8 9.5H5V18h3V9.5zM19 9.5h-2.5v1.2c-.6-1.08-2.2-1.2-3.05-.6-.75.52-.9 1.62-.9 2.5V18H14v-4c0-.95.3-1.8 1.5-1.8 1.1 0 1.2 1.07 1.2 1.85V18H19V9.5z"
                                    stroke="#9fb1d3"
                                    strokeWidth="0.6"
                                    fill="#cbd7e6"
                                />
                            </svg>
                            LinkedIn
                        </a>

                        <a
                            href="https://twitter.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.socialLink}
                        >
                            <svg style={styles.icon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path
                                    d="M22 5.92a6.77 6.77 0 01-1.89.52 3.3 3.3 0 001.45-1.82 6.6 6.6 0 01-2.09.8A3.28 3.28 0 0015.5 4c-1.82 0-3.3 1.48-3.3 3.3 0 .26.03.52.08.77A9.33 9.33 0 013 5.15a3.29 3.29 0 001.02 4.4 3.22 3.22 0 01-1.5-.41v.04c0 1.6 1.14 2.93 2.65 3.23a3.3 3.3 0 01-1.49.06 3.29 3.29 0 003.07 2.28A6.6 6.6 0 012 19.54 9.34 9.34 0 007.29 21c5.85 0 9.06-4.85 9.06-9.06v-.41A6.5 6.5 0 0022 5.92z"
                                    stroke="#9fb1d3"
                                    strokeWidth="0.4"
                                    fill="#cbd7e6"
                                />
                            </svg>
                            Twitter
                        </a>
                    </nav>
                </div>
            </div>

            <div style={{ ...styles.container, ...styles.bottomBar }}>
                <div>© {new Date().getFullYear()} Chatbot UI. All rights reserved.</div>
                <div style={{ color: "#7f9ecf" }}>
                    Support:{" "}
                    <a href="mailto:support@example.com" style={{ color: "inherit", textDecoration: "underline" }}>
                        support@example.com
                    </a>
                </div>
            </div>
        </footer>
    );
}