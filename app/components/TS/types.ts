export interface ContactDetails {
	name: string;
	email: string;
	message: string;
}

export type PdfViewerProps = {
	onClose: () => void;
};
