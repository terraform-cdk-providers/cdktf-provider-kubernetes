// https://www.terraform.io/docs/providers/kubernetes/r/ingress.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface IngressConfig extends TerraformMetaArguments {
  /** Terraform will wait for the load balancer to have at least 1 endpoint before considering the resource created. */
  readonly waitForLoadBalancer?: boolean;
  /** metadata block */
  readonly metadata: IngressMetadata[];
  /** spec block */
  readonly spec: IngressSpec[];
}
export class IngressLoadBalancerIngress extends ComplexComputedList {

  // hostname - computed: true, optional: false, required: true
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // ip - computed: true, optional: false, required: true
  public get ip() {
    return this.getStringAttribute('ip');
  }
}
export interface IngressMetadata {
  /** An unstructured key value map stored with the ingress that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency */
  readonly generateName?: string;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the ingress. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the ingress, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Namespace defines the space within which name of the ingress must be unique. */
  readonly namespace?: string;
}
export interface IngressSpecBackend {
  /** Specifies the name of the referenced service. */
  readonly serviceName?: string;
  /** Specifies the port of the referenced service. */
  readonly servicePort?: string;
}
export interface IngressSpecRuleHttpPathBackend {
  /** Specifies the name of the referenced service. */
  readonly serviceName?: string;
  /** Specifies the port of the referenced service. */
  readonly servicePort?: string;
}
export interface IngressSpecRuleHttpPath {
  /** Path is an extended POSIX regex as defined by IEEE Std 1003.1, (i.e this follows the egrep/unix syntax, not the perl syntax) matched against the path of an incoming request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986. Paths must begin with a '/'. If unspecified, the path defaults to a catch all sending traffic to the backend. */
  readonly path?: string;
  /** backend block */
  readonly backend?: IngressSpecRuleHttpPathBackend[];
}
export interface IngressSpecRuleHttp {
  /** path block */
  readonly path: IngressSpecRuleHttpPath[];
}
export interface IngressSpecRule {
  /** Host is the fully qualified domain name of a network host, as defined by RFC 3986. Note the following deviations from the "host" part of the URI as defined in the RFC: 1. IPs are not allowed. Currently an IngressRuleValue can only apply to the
	  IP in the Spec of the parent Ingress.
2. The `:` delimiter is not respected because ports are not allowed.
	  Currently the port of an Ingress is implicitly :80 for http and
	  :443 for https.
Both these may change in the future. Incoming requests are matched against the host before the IngressRuleValue. If the host is unspecified, the Ingress routes all traffic based on the specified IngressRuleValue. */
  readonly host?: string;
  /** http block */
  readonly http: IngressSpecRuleHttp[];
}
export interface IngressSpecTls {
  /** Hosts are a list of hosts included in the TLS certificate. The values in this list must match the name/s used in the tlsSecret. Defaults to the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified. */
  readonly hosts?: string[];
  /** SecretName is the name of the secret used to terminate SSL traffic on 443. Field is left optional to allow SSL routing based on SNI hostname alone. If the SNI host in a listener conflicts with the "Host" header field used by an IngressRule, the SNI host is used for termination and value of the Host header is used for routing. */
  readonly secretName?: string;
}
export interface IngressSpec {
  /** backend block */
  readonly backend?: IngressSpecBackend[];
  /** rule block */
  readonly rule?: IngressSpecRule[];
  /** tls block */
  readonly tls?: IngressSpecTls[];
}

// Resource

export class Ingress extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IngressConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_ingress',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._waitForLoadBalancer = config.waitForLoadBalancer;
    this._metadata = config.metadata;
    this._spec = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // load_balancer_ingress - computed: true, optional: false, required: true
  public loadBalancerIngress(index: string) {
    return new IngressLoadBalancerIngress(this, 'load_balancer_ingress', index);
  }

  // wait_for_load_balancer - computed: false, optional: true, required: false
  private _waitForLoadBalancer?: boolean;
  public get waitForLoadBalancer() {
    return this._waitForLoadBalancer;
  }
  public set waitForLoadBalancer(value: boolean | undefined) {
    this._waitForLoadBalancer = value;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: IngressMetadata[];
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: IngressMetadata[]) {
    this._metadata = value;
  }

  // spec - computed: false, optional: false, required: true
  private _spec: IngressSpec[];
  public get spec() {
    return this._spec;
  }
  public set spec(value: IngressSpec[]) {
    this._spec = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      wait_for_load_balancer: this._waitForLoadBalancer,
      metadata: this._metadata,
      spec: this._spec,
    };
  }
}
