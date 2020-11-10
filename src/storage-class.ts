// https://www.terraform.io/docs/providers/kubernetes/r/storage_class.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface StorageClassConfig extends TerraformMetaArguments {
  /** Indicates whether the storage class allow volume expand */
  readonly allowVolumeExpansion?: boolean;
  /** Persistent Volumes that are dynamically created by a storage class will have the mount options specified */
  readonly mountOptions?: string[];
  /** The parameters for the provisioner that should create volumes of this storage class */
  readonly parameters?: { [key: string]: string };
  /** Indicates the type of the reclaim policy */
  readonly reclaimPolicy?: string;
  /** Indicates the type of the provisioner */
  readonly storageProvisioner: string;
  /** Indicates when volume binding and dynamic provisioning should occur */
  readonly volumeBindingMode?: string;
  /** metadata block */
  readonly metadata: StorageClassMetadata[];
}
export interface StorageClassMetadata {
  /** An unstructured key value map stored with the storage class that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency */
  readonly generateName?: string;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the storage class. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the storage class, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
}

// Resource

export class StorageClass extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StorageClassConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_storage_class',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowVolumeExpansion = config.allowVolumeExpansion;
    this._mountOptions = config.mountOptions;
    this._parameters = config.parameters;
    this._reclaimPolicy = config.reclaimPolicy;
    this._storageProvisioner = config.storageProvisioner;
    this._volumeBindingMode = config.volumeBindingMode;
    this._metadata = config.metadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_volume_expansion - computed: false, optional: true, required: false
  private _allowVolumeExpansion?: boolean;
  public get allowVolumeExpansion() {
    return this.getBooleanAttribute('allow_volume_expansion');
  }
  public set allowVolumeExpansion(value: boolean ) {
    this._allowVolumeExpansion = value;
  }
  public resetAllowVolumeExpansion() {
    this._allowVolumeExpansion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowVolumeExpansionInput() {
    return this._allowVolumeExpansion
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions?: string[];
  public get mountOptions() {
    return this.getListAttribute('mount_options');
  }
  public set mountOptions(value: string[] ) {
    this._mountOptions = value;
  }
  public resetMountOptions() {
    this._mountOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string };
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } ) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // reclaim_policy - computed: false, optional: true, required: false
  private _reclaimPolicy?: string;
  public get reclaimPolicy() {
    return this.getStringAttribute('reclaim_policy');
  }
  public set reclaimPolicy(value: string ) {
    this._reclaimPolicy = value;
  }
  public resetReclaimPolicy() {
    this._reclaimPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reclaimPolicyInput() {
    return this._reclaimPolicy
  }

  // storage_provisioner - computed: false, optional: false, required: true
  private _storageProvisioner: string;
  public get storageProvisioner() {
    return this.getStringAttribute('storage_provisioner');
  }
  public set storageProvisioner(value: string) {
    this._storageProvisioner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProvisionerInput() {
    return this._storageProvisioner
  }

  // volume_binding_mode - computed: false, optional: true, required: false
  private _volumeBindingMode?: string;
  public get volumeBindingMode() {
    return this.getStringAttribute('volume_binding_mode');
  }
  public set volumeBindingMode(value: string ) {
    this._volumeBindingMode = value;
  }
  public resetVolumeBindingMode() {
    this._volumeBindingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeBindingModeInput() {
    return this._volumeBindingMode
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: StorageClassMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: StorageClassMetadata[]) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_volume_expansion: this._allowVolumeExpansion,
      mount_options: this._mountOptions,
      parameters: this._parameters,
      reclaim_policy: this._reclaimPolicy,
      storage_provisioner: this._storageProvisioner,
      volume_binding_mode: this._volumeBindingMode,
      metadata: this._metadata,
    };
  }
}
