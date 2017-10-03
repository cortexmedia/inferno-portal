import Inferno, {InfernoChildren, InfernoInput} from 'inferno';
import Component from 'inferno-component';

export type PortalNode = Element | Node | HTMLElement | DocumentFragment | SVGAElement | null;

export interface IPortalProps {
    readonly children?: InfernoInput;
    readonly node?: PortalNode;
}

export class Portal extends Component<IPortalProps, {}> {
    private defaultNode: HTMLElement | null = null;

    public componentWillUnmount(): void {
        if (this.defaultNode) {
            document.body.removeChild(this.defaultNode);
        }

        this.defaultNode = null;
    }

    public render(props: IPortalProps): null {
        let node = props.node;

        if (node) {
            if (this.defaultNode) {
                document.body.removeChild(this.defaultNode);
                this.defaultNode = null;
            }
        }
        else {
            node = this.defaultNode;

            if (!node) {
                node = this.defaultNode = document.createElement('div');
                document.body.appendChild(node);
            }
        }

        Inferno.render(props.children || null, node);

        return null;
    }
}
