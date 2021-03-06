// https://www.terraform.io/docs/providers/kubernetes/r/default_service_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultServiceAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic mounting of the service account token
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account.html#automount_service_account_token DefaultServiceAccount#automount_service_account_token}
  */
  readonly automountServiceAccountToken?: boolean;
  /**
  * image_pull_secret block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account.html#image_pull_secret DefaultServiceAccount#image_pull_secret}
  */
  readonly imagePullSecret?: DefaultServiceAccountImagePullSecret[];
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account.html#metadata DefaultServiceAccount#metadata}
  */
  readonly metadata: DefaultServiceAccountMetadata[];
  /**
  * secret block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account.html#secret DefaultServiceAccount#secret}
  */
  readonly secret?: DefaultServiceAccountSecret[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account.html#timeouts DefaultServiceAccount#timeouts}
  */
  readonly timeouts?: DefaultServiceAccountTimeouts;
}
export interface DefaultServiceAccountImagePullSecret {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account.html#name DefaultServiceAccount#name}
  */
  readonly name?: string;
}

function defaultServiceAccountImagePullSecretToTerraform(struct?: DefaultServiceAccountImagePullSecret): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface DefaultServiceAccountMetadata {
  /**
  * An unstructured key value map stored with the service account that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account.html#annotations DefaultServiceAccount#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the service account. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account.html#labels DefaultServiceAccount#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the service account, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account.html#name DefaultServiceAccount#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the service account must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account.html#namespace DefaultServiceAccount#namespace}
  */
  readonly namespace?: string;
}

function defaultServiceAccountMetadataToTerraform(struct?: DefaultServiceAccountMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface DefaultServiceAccountSecret {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account.html#name DefaultServiceAccount#name}
  */
  readonly name?: string;
}

function defaultServiceAccountSecretToTerraform(struct?: DefaultServiceAccountSecret): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface DefaultServiceAccountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account.html#create DefaultServiceAccount#create}
  */
  readonly create?: string;
}

function defaultServiceAccountTimeoutsToTerraform(struct?: DefaultServiceAccountTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account.html kubernetes_default_service_account}
*/
export class DefaultServiceAccount extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account.html kubernetes_default_service_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultServiceAccountConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultServiceAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_default_service_account',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._automountServiceAccountToken = config.automountServiceAccountToken;
    this._imagePullSecret = config.imagePullSecret;
    this._metadata = config.metadata;
    this._secret = config.secret;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automount_service_account_token - computed: false, optional: true, required: false
  private _automountServiceAccountToken?: boolean;
  public get automountServiceAccountToken() {
    return this.getBooleanAttribute('automount_service_account_token');
  }
  public set automountServiceAccountToken(value: boolean ) {
    this._automountServiceAccountToken = value;
  }
  public resetAutomountServiceAccountToken() {
    this._automountServiceAccountToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automountServiceAccountTokenInput() {
    return this._automountServiceAccountToken
  }

  // default_secret_name - computed: true, optional: false, required: false
  public get defaultSecretName() {
    return this.getStringAttribute('default_secret_name');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_pull_secret - computed: false, optional: true, required: false
  private _imagePullSecret?: DefaultServiceAccountImagePullSecret[];
  public get imagePullSecret() {
    return this.interpolationForAttribute('image_pull_secret') as any;
  }
  public set imagePullSecret(value: DefaultServiceAccountImagePullSecret[] ) {
    this._imagePullSecret = value;
  }
  public resetImagePullSecret() {
    this._imagePullSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretInput() {
    return this._imagePullSecret
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: DefaultServiceAccountMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: DefaultServiceAccountMetadata[]) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: DefaultServiceAccountSecret[];
  public get secret() {
    return this.interpolationForAttribute('secret') as any;
  }
  public set secret(value: DefaultServiceAccountSecret[] ) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DefaultServiceAccountTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DefaultServiceAccountTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automount_service_account_token: cdktf.booleanToTerraform(this._automountServiceAccountToken),
      image_pull_secret: cdktf.listMapper(defaultServiceAccountImagePullSecretToTerraform)(this._imagePullSecret),
      metadata: cdktf.listMapper(defaultServiceAccountMetadataToTerraform)(this._metadata),
      secret: cdktf.listMapper(defaultServiceAccountSecretToTerraform)(this._secret),
      timeouts: defaultServiceAccountTimeoutsToTerraform(this._timeouts),
    };
  }
}
