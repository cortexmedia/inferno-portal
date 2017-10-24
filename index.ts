import Inferno, {InfernoInput} from 'inferno';
import createElement from 'inferno-create-element';
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

    public render(props: IPortalProps, state: {}, context: any): null {
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

        const vnode = createElement(PortalContext, {
            context,
            children: props.children,
        });

        Inferno.render(vnode, node);

        return null;
    }
}

interface IPortalContextProps {
    readonly context: any;
    readonly children?: InfernoInput;
}

class PortalContext extends Component<IPortalContextProps, {}> {
    public getChildContext(): any {
        return this.props.context;
    }

    public render(props: IPortalContextProps): InfernoInput | null {
        return props.children || null;
    }
}
