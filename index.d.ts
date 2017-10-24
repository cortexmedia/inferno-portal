import { InfernoInput } from 'inferno';
import Component from 'inferno-component';
export declare type PortalNode = Element | Node | HTMLElement | DocumentFragment | SVGAElement | null;
export interface IPortalProps {
    readonly children?: InfernoInput;
    readonly node?: PortalNode;
}
export declare class Portal extends Component<IPortalProps, {}> {
    private defaultNode;
    componentWillUnmount(): void;
    render(props: IPortalProps, state: {}, context: any): null;
}
